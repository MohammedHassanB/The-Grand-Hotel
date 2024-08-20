import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
function Logout() {
  const { logout, isLoadign } = useLogout();
  return (
    <ButtonIcon disabled={isLoadign} onClick={logout}>
      {!isLoadign ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
