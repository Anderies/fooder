import React from 'react';
import Button from '@mui/material/Button';
import { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader'
function FoodMachineScan() {

    const [isScanned, setScanned] = useState(false)
    // const [src, setSrc] = useState('');
    const qrRef = useRef(null);

    const [numMachine, setNumMachine] = useState(0);
    // const [scanResultFile, setScanResultFile] = useState('');
    const [scanResultWebCam, setScanResultWebCam] = useState('');
    const onScanFile = () => {
        qrRef.current.openImageDialog();
    }

    const ScanBardcode = () => {
        // console.log("boom", isScanned);
        setScanned(true)
    }

    // const handleErrorFile = (error) => {
    //     console.log(error);
    // }

    // const handleScanFile = (result) => {
    //     if (result) {
    //         setScanResultFile(result);
    //     }
    // }

    const handleErrorWebCam = (error) => {
        console.log(error);
    }

    const handleScanWebCam = (result) => {

        if (result) {
            setScanResultWebCam(result);

            if (scanResultWebCam == "foodermachineraspberrrypi-1") {
                console.log("boom 1")
                setScanned(true)
                setNumMachine(1)
            } else if (scanResultWebCam == "foodermachineraspberrypi-2") {
                console.log("boom 2")
                setScanned(true)
                setNumMachine(2)

                console.log("==== scanResultWebCam", scanResultWebCam)
                console.log("==== num Machine", numMachine)
            }

        }
    }

    useEffect(() => { }, [])

    return <>
        <div style={{ marginTop: "15%" }}>

        </div>
        <div className='d-flex justify-content-center flex-column mt-5'>
            <p className='align-self-center my-4'>Authentication</p>
            <QrReader
                facingMode='rear'
                delay={300}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
            />
            <p>Scanned by Webcam {scanResultWebCam}</p>
            {/* <Button
                onClick={onScanFile}
                variant="contained" className={`w-50 mx-auto`}>Upload QR Code</Button>
            <div className='w-100'>
                <QrReader
                    ref={qrRef}
                    delay={300}
                    style={{ width: '100%' }}
                    onError={handleErrorFile}
                    onScan={handleScanFile}
                    legacyMode
                >
                </QrReader>

                <p>Scanned Code {scanResultFile}</p>
            </div> */}
            <Button
                onClick={ScanBardcode}
                variant="contained" className={`w-50 mx-auto`} style={{ marginTop: "15%" }}>Scan Machine Bardcode</Button>
            {isScanned ?
                <p className='align-self-center my-4' style={{ fontFamily: 'poppins-reg' }} >Machine Detected: <span style={{ color: '#1154ff', fontFamily: 'poppins-bold' }}>Number {numMachine}</span></p>
                : <p></p>}

        </div>
    </>
}

export default FoodMachineScan;
