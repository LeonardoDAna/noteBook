import request from "../../utils/request";

export const sendRedPacket = data => {
  return request({
    url: "/draw/sendRedPacket",
    method: "post",
    data
  });
};
