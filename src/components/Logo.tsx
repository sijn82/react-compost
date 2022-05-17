import logo from '../assets/images/logo.svg';



type LogoProps = {
    name: string,
    homepage: boolean
    setHomepage: (homepage: boolean) => (void);
}

function Logo(props: LogoProps) {

    const toggleHomepage = () => {
        props.setHomepage(false)
    }

    return (
        props.homepage,
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Hello, {props.name}
            </p>
            <p>
                Edit <code className='text-gray-400 font-bold'> src/App.tsx </code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            Learn React
            </a>
            <button onClick={toggleHomepage}> Enter Portal </button>
      </header>
    )
}

export default Logo