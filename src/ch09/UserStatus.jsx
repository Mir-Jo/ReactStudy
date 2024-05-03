import React , { useState } from 'react';
function UserStatus(props){
  const [isLoggedIn, setIsLoggined] = useState(false);
  return (
    <div>
      이 사용자는 현재
      <b>
        {isLoggedIn ? '로그인' : '로그인하지 않은'}
      </b> 상태입니다.
    </div>
  );
}
export default UserStatus;