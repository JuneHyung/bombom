import http from "@/util/http-common";


// const config = {
//   headers: { "access-token": localStorage.getItem("access-token") }
// };

function login(member, success, fail) {
  http.defaults.headers["access-token"] = window.localStorage.getItem(
    "access-token"
  );
  const body = {
    memberId: member.memberId,
    memberPw: member.memberPw
  };

  http
    .post("member/login", JSON.stringify(body))
    .then(success)
    .catch(fail);
}

async function findById(memberId, success, fail) {
  http.defaults.headers["access-token"] = window.localStorage.getItem(
    "access-token"
  );
  await http
    .get(`/member/info/${memberId}`)
    .then(success)
    .catch(fail);
}

export { login, findById };
