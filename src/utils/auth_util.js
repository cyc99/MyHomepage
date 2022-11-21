import { Cookies } from "react-cookie";

function AuthVerify(props) {
  const { isReload, checkAdmin } = props;
  const cookies = new Cookies();
  const userInfo = cookies.get("userInfo");

  if (userInfo) {
    const { expiresIn, isAdmin } = userInfo;
    if (!CheckAuth({ expiresIn })) {
      cookies.remove("userInfo");
      if (isReload) {
        LogOut(cookies);
        alert("로그인이 만료되었습니다.\n메인 화면으로 이동합니다.");
        window.location.reload();
      }
      return false;
    } else if (checkAdmin && !isAdmin) {
      if (isReload) {
        alert("권한이 없습니다.\n메인 화면으로 이동합니다.");
        window.location.reload();
      }
      return false;
    } else {
      return true;
    }
  } else {
    if (isReload) {
      alert("메인화면으로 이동합니다.");
      window.location.reload();
    }
    return false;
  }
}

export default AuthVerify;

function CheckAuth(props) {
  const { expiresIn } = props;
  if (expiresIn && expiresIn < Date.now() * 0.001) {
    return false;
  } else if (expiresIn) {
    return true;
  }
  return false;
}

function LogOut(cookies) {
  cookies.remove("userInfo");
}
