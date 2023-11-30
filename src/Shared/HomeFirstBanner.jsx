import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}


const HomeFirstBanner = () => {

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">

            <div ref={sliderRef} className="keen-slider max-w-screen-xl mx-auto">
                <div className="keen-slider__slide number-slide3">
                    <img className="w-full h-[70vh]" src="https://i.ibb.co/r6nsr4V/principal-activities-mobile.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <img className="w-full h-[70vh]" src="https://i.ibb.co/25Vm5Kk/productbanner-rmrecommends2020-1.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <img className="w-full h-[70vh]" src="https://i.ibb.co/4pY5ygR/5uoi-YAw-JZ1-J6le3o9a5c-RMVz-SVc-SZ6-Ez-DQyy5-El7.png" alt="" />
                </div>
                <div className="keen-slider__slide number-slide6">
                    <img className="w-full h-[70vh]" src="https://i.ibb.co/7b3JW92/maxresdefault-3.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide4">
                    <img className="w-full h-[70vh]" src="https://i.ibb.co/dMD6wyD/Shop-Products-Social-Media-Banner-Design-Template-scaled.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <img className="w-full h-[70vh]" src="https://i.ibb.co/8sBZZHn/Banner-Image-3.webp" alt="" />
                </div>


            </div>

            <div className="max-w-md mx-auto mt-3">
                <div ref={thumbnailRef} className="keen-slider thumbnail">
                    <div className="keen-slider__slide number-slide3">
                        <img className="h-24 w-32" src="https://i.ibb.co/r6nsr4V/principal-activities-mobile.jpg" alt="" />
                    </div>
                    <div className="keen-slider__slide number-slide1">
                        <img className="h-24 w-32" src="https://i.ibb.co/25Vm5Kk/productbanner-rmrecommends2020-1.jpg" alt="" />
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <img className="h-24 w-32" src="https://i.ibb.co/4pY5ygR/5uoi-YAw-JZ1-J6le3o9a5c-RMVz-SVc-SZ6-Ez-DQyy5-El7.png" alt="" />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                        <img className="h-24 w-32" src="https://i.ibb.co/7b3JW92/maxresdefault-3.jpg" alt="" />
                    </div>
                    <div className="keen-slider__slide number-slide4">
                        <img className="h-24 w-32" src="https://i.ibb.co/dMD6wyD/Shop-Products-Social-Media-Banner-Design-Template-scaled.jpg" alt="" />
                    </div>
                    <div className="keen-slider__slide number-slide5">
                        <img className="h-24 w-32" src="https://i.ibb.co/8sBZZHn/Banner-Image-3.webp" alt="" />
                    </div>


                </div>
            </div>
            <div className="divider py-4"></div>
        </div>
    );
};

export default HomeFirstBanner;