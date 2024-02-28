import Image from "next/image";

export default function Profile() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{ marginRight: "200px" }}>
                <Image
                    src="https://i.imgur.com/MK3eW3Am.jpg"
                    alt="Katherine Johnson"
                    width={100}
                    height={100}
                />
            </div>
            <div>
                <Image
                    src="https://i.imgur.com/MK3eW3Am.jpg"
                    alt="Katherine Johnson"
                    width={100}
                    height={100}
                />
            </div>
            <div style={{ marginLeft: "200px" }}>
                <Image
                    src="https://i.imgur.com/MK3eW3Am.jpg"
                    alt="Katherine Johnson"
                    width={100}
                    height={100}
                />
            </div>
        </div>        
    );
}
