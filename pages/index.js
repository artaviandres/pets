import React from 'react';
import Router from 'next/router';
import FaUser from 'react-icons/lib/fa/user';
import FaLock from 'react-icons/lib/fa/lock';
import Input from '../components/Input';
import Button from '../components/Button';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const videoList = [
            'Cat',
            'Puppy'
        ];
        const backgroundVideo = videoList[Math.floor(Math.random()*videoList.length)];
        return (
            <div>
                <div className="container">
                    <form>
                        <Input icon={<FaUser size={20} color={'gray'} />} placeholder={'username'} type={'text'} required={'true'} />
                        <Input icon={<FaLock size={20} color={'gray'} />} placeholder={'password'} type={'password'} required={'true'} />
                        <br />
                        <Button color={'white'}>Login</Button>
                    </form>
                </div>
                <video autoPlay loop id="video-background" muted>
                    <source
                        src={'/static/videos/' + backgroundVideo + '.mp4'}
                        type="video/mp4"
                    />
                </video>
                <style jsx>{`
                    video {
                        position: absolute;
                        top: 0;
                        z-index: -100;
                        width: 100%;
                    }
                    .container {
                        margin: 38vh auto 0 auto;
                        height: 500px;
                        width: 500px;
                        display: block;
                    }
                `}</style>
            </div>
        );
    }
}

export default Index;