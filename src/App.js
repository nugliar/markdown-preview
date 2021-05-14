
import React, { useState } from 'react'
import marked from 'marked'

import { inputDefaultText } from './inputDefaultText'

const editorStyle = {
  width: '60%',
}

const previewStyle = {
  width: '80%',
  minHeight: '60%'
}

const fullsizeStyle = {
  width: '98%',
  height: '95vh',
}

const textAreaNoResize = {
  resize: 'none',
  height: '100%'
}

const textAreaResize = {
  resize: 'vertical'
}

const fullSizeIcon = (
  <i className="icon-fullscreen"></i>
)

const normalSizeIcon = (
  <p>-</p>
)

const Toolbar = (props) => {
  return (
    <div className='toolbar'>
      <p>{props.title}</p>
      <button onClick={props.buttonClick}>{props.buttonIcon}</button>
    </div>
  )
}

function App() {

  const [ inputText, setInputText ] = useState(inputDefaultText)
  const [ editorFullsize, setEditorFullsize] = useState(false)
  const [ previewFullsize, setPreviewFullsize] = useState(false)

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const onEditorButtonClick = () => {
    setEditorFullsize(!editorFullsize)
    setPreviewFullsize(!editorFullsize)
  }

  const onPreviewButtonClick = () => {
    setPreviewFullsize(!previewFullsize)
    setEditorFullsize(!previewFullsize)
  }

  return (
    <div className="App">
      <div
        id='editor-wrapper'
        style={editorFullsize ? fullsizeStyle : editorStyle}
        hidden={previewFullsize}
      >
        <Toolbar
          title='Editor'
          buttonIcon={editorFullsize ? normalSizeIcon : fullSizeIcon}
          buttonClick={onEditorButtonClick}
        />
        <textarea
          id='editor'
          className='window'
          onChange={(e) => handleChange(e)}
          value={inputText}
          style={editorFullsize ? textAreaNoResize : textAreaResize}
        >
        </textarea>
      </div>
      <div
        id='preview-wrapper'
        style={previewFullsize ? fullsizeStyle : previewStyle}
        hidden={editorFullsize}
      >
        <Toolbar
          title='Preview'
          buttonIcon={previewFullsize ? normalSizeIcon : fullSizeIcon}
          buttonClick={onPreviewButtonClick}
        />
        <div
          id='preview'
          className='window'
          dangerouslySetInnerHTML={{__html: marked(inputText)}}
        >
        </div>
      </div>
    </div>
  );
}

export default App;
