import React, { useEffect, useState} from 'react';
import Text from '../components/style/Text.style.js';
import Button from '../components/style/Button.style.js';
import '../components/style/result.css';
import { useHistory } from 'react-router-dom';

function Result({ bmi, state }){
    let history=useHistory();
    const [show, setShow]=useState(false) 
    
    return(
        <div className="resultdiv">
            <h2> Sonuç </h2>
            <div>
                {(()=>{
                    if( bmi <18.5){
                        return(
                            <div>
                            <Text>
                               <Text>Vücut kitle indeksiniz <strong>{bmi}</strong></Text> ZAYIF
                            </Text> 
                            </div>
                           
                        )
                    }
                    else if( bmi >=18.5 && bmi<25 ){
                        return(
                            <div>
                                <Text>Vücut kitle indeksiniz <strong>{bmi}</strong></Text>
                                <Text>
                                NORMAL
                                </Text> 
                            </div>
                             
                        )
                    }
                    else if( bmi >=25 && bmi<30 ){
                        return(
                            <div>
                                <Text>Vücut kitle indeksiniz <strong>{bmi}</strong></Text>
                                <Text>
                                FAZLA KİLOLU 
                                </Text>
                                <Button onClick={()=>setShow(!show)}>Beslenme Önerileri</Button>
                            </div>
                              
                        )
                    }
                    else if( bmi >=30){
                        return(
                            <div>
                            <Text>
                                <Text>Vücut kitle indeksiniz <strong>{bmi}</strong></Text> {bmi>40 ? "İleri derece obez": "Obez"} kategorisindesiniz.
                            </Text>  
                            <Button onClick={()=>setShow(!show)}>Beslenme Önerileri</Button>
                            </div>
                        )
                    }
                }) ()}
                
                
            </div>
            <div style={{display:show?'block':'none'}}>
                <Text>
                    <ul>
                    <li><h3>Sağlıklı Bir Yaşam İçin 10 Beslenme Önerisi</h3></li>
                    <li>Öğün atlamayın.. Yeterli ve dengeli beslenmek için öğün atlamayın</li>
                    <li>Öğününüz çeşitli olsun</li>
                    <li>Bol sebze ve meyve tüketin</li>
                    <li>Yağ tüketimini azaltın</li>
                    <li>Abur - cubura sınırlama getirin</li>
                    <li>Kurubaklagilleri ve lifli besinleri tüketin</li>
                    <li>Günde 2 - 2.5 litre su için</li>
                    <li>Alkol alıyorsanız, azaltın</li>
                    </ul>
                    </Text>
                </div>
            
            
            <h2></h2>
        </div>
    )
}

export default Result;