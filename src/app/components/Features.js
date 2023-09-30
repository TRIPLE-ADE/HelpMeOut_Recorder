import styles from "../style"
import Image from "next/image"

const Features = () => {
  return (
    <section className="bg-white flex flex-col justify-center items-center gap-[64px] py-20 px-[100px] mt-14 mb-[70px]">
        <div className="text-center">
            <h2 className={`${styles.heading}`}>Features</h2>
            <p className={`${styles.paragraph}`}>Key Highlights of Our Extension</p>
        </div>
        <div className="flex justify-center items-center gap-[56px]">
           <div className="flex flex-col items-center gap-12">
                <div className="flex items-start gap-4">
                    <Image src="/record.svg" alt="Feature 1" width={48} height={48} style={{width: "auto", height: "auto"}}/>
                    <div>
                        <p className={`${styles.subHeading}`}>Simple Screen Recording</p>
                        <p className={`${styles.paragraph} pt-2`}>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Image src="/share.svg" alt="Feature 1" width={48} height={48} style={{width: "auto", height: "auto"}}/>
                    <div>
                        <p className={`${styles.subHeading}`}>Easy-to-Share URL</p>
                        <p className={`${styles.paragraph} pt-2`}>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Image src="/revisit.svg" alt="Feature 1" width={48} height={48} style={{width: "auto", height: "auto"}}/>
                    <div>
                        <p className={`${styles.subHeading}`}>Revisit Recordings</p>
                        <p className={`${styles.paragraph} pt-2`}>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                    </div>
                </div>

            </div>
            <Image src="/Video Repository.svg" alt="Features" width={636} height={454} style={{width: "auto", height: "auto"}}/>
        </div>
    </section>
  )
}

export default Features