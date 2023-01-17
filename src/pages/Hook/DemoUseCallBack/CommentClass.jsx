import React, { Component } from 'react'

export default class CommentClass extends Component {

    // Chỉ có các phương thức của lifecycle mới đc gọi tạo lại

    //không bị tạo lại khi render lại
    first = () => {
        console.log("phuong thuc class")
    }

  render() {
    return (
      <div>CommentClass</div>
    )
  }
}
