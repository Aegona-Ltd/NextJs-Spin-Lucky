import { useSelector } from "react-redux"
import { RootState } from "../core/store";

function useAuth() {
    const auth = useSelector((state: RootState) => state.auth)
    return auth;
}

export default useAuth;