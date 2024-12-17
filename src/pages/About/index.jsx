import styles from "./About.module.scss";

function AboutPage() {
    return (
        <>
            <div className="inner">
                <div className="title-container py-24 text-center">
                    <h1 className="font-bold text-5xl">SGTravel</h1>
                    <p className="font-thin mt-4">
                        Khám phá thế giới cùng chúng tôi – Hành trình của bạn,
                        đam mê của chúng tôi,{" "}
                    </p>
                    <p className="font-thin mb-4">
                        và những trải nghiệm bất tận!
                    </p>
                    {/* <p className="my-4">Home &gt; About</p> */}
                </div>

                <div className="flex">
                    <div className="left-content flex-7">
                        <h2 className="content-title font-bold text-3xl mb-8">
                            Thông tin về chúng tôi
                        </h2>
                        <p className="content-text">
                            SGTravel là đơn vị chuyên cung cấp dịch vụ đặt tour
                            du lịch, mang đến những hành trình độc đáo và đáng
                            nhớ. Từ khi thành lập, chúng tôi đã không ngừng đổi
                            mới để đáp ứng nhu cầu ngày càng đa dạng của khách
                            hàng. Với đội ngũ chuyên nghiệp và các đối tác uy
                            tín, chúng tôi cam kết mang đến chất lượng dịch vụ
                            cao nhất, giúp bạn khám phá những điểm đến mơ ước
                            một cách dễ dàng và trọn vẹn. Hành trình của bạn,
                            niềm vui của chúng tôi!
                        </p>
                    </div>
                    <div className="right-image-container flex-3">
                        <img
                            className="right-image"
                            src="https://png.pngtree.com/png-clipart/20220621/original/pngtree-cool-travelling-van-tropical-png-image_8164641.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="contact-container inner">
                <h2 className="contact-title font-bold text-3xl mb-8">
                    Liên hệ với chúng tôi
                </h2>

                <div className="contact-content flex gap-16">
                    <div className="contact-left flex-1">
                        <p className="contact-summary">
                            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
                            trong việc lên kế hoạch cho chuyến đi hoàn hảo. Dù
                            bạn đang tìm kiếm một hành trình thư giãn, khám phá,
                            hay một chuyến đi công tác kết hợp du lịch, đội ngũ
                            của chúng tôi sẽ giúp bạn chọn lựa những giải pháp
                            phù hợp nhất.
                        </p>
                        <p className="contact-summary mt-4">Liên hệ ngay với chúng tôi qua
                            form bên phải, hoặc đến trực tiếp văn phòng để được
                            tư vấn chi tiết và tận tâm!</p>
                    </div>

                    <div className="contact-right flex-1">
                        <div className="first-line flex gap-4">
                            <div className="first-line-item">
                                <label htmlFor="" className="font-bold">
                                    Họ và tên
                                </label>
                                <input
                                    type="text"
                                    className="border py-2 px-4 rounded-none h-16 mt-2"
                                    placeholder="Nhập họ và tên"
                                />
                            </div>
                            <div className="first-line-item">
                                <label htmlFor="" className="font-bold">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="border py-2 px-4 rounded-none h-16 mt-2"
                                    placeholder="Nhập email"
                                />
                            </div>
                            <div className="first-line-item">
                                <label htmlFor="" className="font-bold">
                                    Số điện thoại
                                </label>
                                <input
                                    type="text"
                                    className="border py-2 px-4 rounded-none h-16 mt-2"
                                    placeholder="Nhập số điện thoại"
                                />
                            </div>
                        </div>
                        <div className="second-line flex flex-col my-8">
                            <div className="first-line-item">
                                <label htmlFor="" className="font-bold ">
                                    Nội dung
                                </label>
                                <br />
                                <textarea
                                    type="text"
                                    className="block py-2 px-4 w-full border "
                                    placeholder="Nhập nội dung của bạn"
                                ></textarea>
                            </div>
                        </div>
                        <button className="border px-8 py-2">Gửi</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;
