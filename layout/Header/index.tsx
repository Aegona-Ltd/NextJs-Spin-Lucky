import { Dropdown, Menu, Space } from "antd";
import styles from "./Header.module.scss";
import { EditOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from "react";
import ModalEditPrize from "../ModalEditPrize";

function Header() {
    const [showEditPrize, setShowEditPrize] = useState(false)

    const menu = (
        <Menu
            items={[
                {
                    label: <span className={`${styles['header__item']}`}>Profile</span>,
                    key: '0',
                    icon: <UserOutlined sizes="30px" />
                },
                {
                    label: <span className={`${styles['header__item']}`}>Edit Prize</span>,
                    key: '2',
                    onClick: () => setShowEditPrize(!showEditPrize),
                    icon: <EditOutlined />
                },

                {
                    label: <span className={`${styles['header__item']}`}>Logout</span>,
                    key: '3',
                    icon: <LogoutOutlined />
                },

            ]}
        />
    );

    return (
        <header className={`${styles['header']}`}>
            <div className="row h-100 align-items-center px-4">
                <div className="col-auto">
                    <div className="d-flex align-items-center">
                        <img className={`${styles['header__logo']}`} src="data:image/png;base64,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" alt="" />
                        <span className="ms-2 fs-5 fw-bold">Picker Wheel</span>
                    </div>
                </div>
                <div className="col d-flex justify-content-end">
                    <Dropdown
                        overlay={menu}
                        trigger={['click']}
                    >
                        <img className={`${styles['header__avatar']} cursor-pointer`} src="https://topshare.vn/wp-content/uploads/2020/08/H%C3%ACnh-%E1%BA%A3nh-avatar-%C4%91en-%C4%91%E1%BA%B9p-12.jpg" alt="" />
                    </Dropdown>
                </div>
            </div>

            <ModalEditPrize
                show={showEditPrize}
                onClose={() => setShowEditPrize(!showEditPrize)}
            />
        </header>
    );
}

export default Header;