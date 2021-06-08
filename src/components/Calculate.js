import React from 'react';
import '../components/style/Calculate.css';
import { useHistory } from 'react-router-dom';
import Button from '../components/style/Button.style.js'

function Calculate({ bmiHandle, state, calculate }) {

    const weight = localStorage.getItem("weight")
    console.log(weight)
    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="main">
            <h2>Vücut Kitle İndeksi  Hesaplama </h2>
            <div className="container">
                <form action="" onSubmit={handleSubmit}>

                    <label htmlFor="weight">Kilonuz</label>
                    <br />
                    <input type="text"
                        name="weight"
                        value={state.weight}
                        onChange={bmiHandle}
                        id="weight" />
                    <br />

                    <label htmlFor="height">Boyunuz</label>
                    <br />
                    <input type="text"
                        name="height"
                        value={state.height}
                        onChange={bmiHandle}
                        id="height" />
                    <br />

                    <label htmlFor="age">Yaşınız</label>
                    <br />
                    <input type="text"
                        name="age"
                        value={state.age}
                        onChange={bmiHandle}
                        id="age" />
                    <br />
                    <Button type="submit"
                    className="gonder"
                        onClick={() => {
                            calculate();
                            history.push('/result');
                        }}>Gönder</Button>
                </form>
            </div>
        </div>

    );
}
export default Calculate;