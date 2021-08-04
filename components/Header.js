import Image from 'next/image';

function Header() {


    return (
        <Header>
            {/* left */}
            <div>
                <Image 
                    src="https://links.papreact.com/gd3" layout='fill' 
                    objectFit='contain'
                    objectPosition='left'
                    />
            </div>

            {/* Middle */}
            <div></div>

            {/* right */}
            <div></div>

        </Header>
    )
}

export default Header
