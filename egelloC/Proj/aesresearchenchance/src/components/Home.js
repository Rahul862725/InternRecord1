import React from 'react'
import './style.css'

export default function Home() {
  return (
    <div className='container'>
      <div className="content">
      <h1 style={{marginBottom:'50px'}}> Enhanced AES Algorithm </h1>
        <p>Advanced Encryption Standard (AES) is a specification for the encryption of electronic data established by the U.S National Institute of Standards and Technology (NIST) in 2001. AES is widely used today as it is a much stronger than DES and triple DES despite being harder to implement.</p>
        <p>The security of sensitive information against “prying
eyes” has been a universal prime concern. Therefore,
a special mechanism is required to guarantee the
security and privacy of information. Under the
existing circumstances the encryption of data is a
crucial factor in ensuring the security of data
transmission and is the ideal technique to protect data
against passive and active fraud. Cryptography is the
science of encryption and decryption of confidential
and often sensitive messages. Encrypted messages use
computer algorithms.</p>
        <h4>Points to remember</h4>
        <ul>
          <li>AES is a block cipher.</li>
          <li>The key size can be 128/192/256 bits.</li>
          <li>Encrypts data in blocks of 128 bits each.</li>
        </ul>
        <p>That means it takes 128 bits as input and outputs 128 bits of encrypted cipher text as output. AES relies on substitution-permutation network principle which means it is performed using a series of linked operations which involves replacing and shuffling of the input data</p>

        <p>These web encrypt the data based on Enchanced AES algorithm that are proposed on a Research Paper.</p>
       <a href= 'https://sci-hub.se/10.1109/ICDIPC.2015.7323004'>  <button >Read Paper</button></a>
      </div>
    </div>
  )
}
