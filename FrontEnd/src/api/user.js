import http from "@/util/http-common";

// 로컬스토리지에서 access-token을 가지고 로그인.
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
