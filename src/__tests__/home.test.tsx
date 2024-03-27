import { render } from "@testing-library/react"
import LoginUser from "../components/login/login";

test('loads and display greeting', async () => {
    render(<LoginUser />);
});