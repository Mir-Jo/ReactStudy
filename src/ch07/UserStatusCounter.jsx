import React, { useState, useEffect, useCallback } from "react";

function UserStatus(props){
  const [isOnline, setIsOnline] = useState(null);

  const handleStatusChange = useCallback((status) => {

    setIsOnline(status.isOnline);
  }, []);

  useEffect (() => {
    const {id} = props.user;
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return  () => {
      ServerAPI.unsubscribeUserStauts(props.user.id, handleStatusChange);
    };
  }, [props.user.id, handleStatusChange]);

  if (isOnline === null){
    return "대기중...";
  }
}