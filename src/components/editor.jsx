import React ,{Component} from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'


class MyckEditor extends Component{
    render(){
        return(
            <div>
                <h2>Using CKEditor 5 from online builder in React</h2>
                <CKEditor
                    editor={ Editor }
                   /* onReady={ editor => {
                         You can store the "editor" and use when it is needed.
                         console.log( 'Editor is ready to use!', editor );
                    } }*/
                    onChange={ ( event, editor ) => {
                        const info = editor.getData();
                        console.log( {  info } );
                    } }
                  /*  onBlur={ ( event, editor ) => {
                       // console.log( 'Blur.', editor );
                    } }*/
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        )
    }
}
export default MyckEditor