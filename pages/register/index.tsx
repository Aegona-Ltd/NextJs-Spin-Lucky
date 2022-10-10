import { Form, Input, Button } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import classNames from "classnames";
import Link from "next/link";
import styles from "../login/Login.module.scss";

const cx = classNames.bind(styles)

function Login() {
    const onFinish = () => {

    }

    return (
        <div style={{ backgroundImage: `url(https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg)` }} className={styles.login}>
            <Form
                name="basic"
                className={styles['login__form']}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <h2 className={`${styles['login__title']} mb-3`}>Register</h2>
                <label className={`${styles['login__label']} ${styles['required']}`}>Username</label>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input className={styles['login__input']} placeholder="Enter your username" />
                </Form.Item>

                <label className={`${styles['login__label']} ${styles['required']}`}>Password</label>
                <Form.Item

                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password className={styles['login__input']} placeholder="Enter your password" />
                </Form.Item>

                <label className={`${styles['login__label']} ${styles['required']}`}>Confirm Password</label>
                <Form.Item

                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please input your confirm password!' }]}
                >
                    <Input.Password className={styles['login__input']} placeholder="Re-enter your password" />
                </Form.Item>

                <Form.Item>
                    <button className={styles['login__btn']} type="submit">
                        Register
                    </button>
                </Form.Item>
                <span className={`${styles['login__text']} d-flex justify-content-center`}>
                    Already have an account?
                    <Link href={'/login'} >

                        <a className={`ms-1 d-inline-block cursor-pointer ${styles['login__text-register']}`}>
                            Login
                        </a>
                    </Link>
                </span>
            </Form>

        </div>
    );
}

export default Login;