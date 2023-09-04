// import { useState } from 'react'

function Create() {

    const createTask = ():void => {
        alert('作成ボタンが押されました。');
    }

    return (
        <div id='create'>
            <h2 id="create-title">新規やることリストの作成</h2>
                <div id="create-part">
                    <div id="create-date">
                        <label>期限日</label>
                        <input type="date" />
                    </div>
                    <div id="create-content">
                        <label>やること</label>
                        <input type="text" />
                    </div>
                </div>
            <div onClick={createTask} id="create-button">作成</div>
        </div>
    )
}

export default Create