import './Loading.css'
import ReactLoading from 'react-loading'

function Loading () {
	return (
		<div className='layout loading'>
			<ReactLoading
          type={"bars"}
          color={"#107EA2"}
          height={150}
          width={150}
        />
		</div>
	)
}

export default Loading
