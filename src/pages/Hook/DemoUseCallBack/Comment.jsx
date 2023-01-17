import React, { memo } from 'react'

function Comment(prop) {
  console.log("render Comment");
  prop.notifyMsg();
  return (
    <div>
      <p>Ahihihi</p>
      <p>{prop.number}</p>
      <div>
        <textarea name="" id="" cols="30" rows="5"></textarea>
      </div>
      <button className='btn btn-danger'>Gửi</button>
    </div>
  )
}
// memo: kiểm tra prop của con có đổi không
//nếu prop đổi => render lại UI, ngược lại không render lại UI (pure component)
export default memo(Comment);//shalow compare (tham trị: number, string, boolean) 