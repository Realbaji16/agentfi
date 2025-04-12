'use client'

import React from 'react'

import { 
    AlertDialog, 
    AlertDialogContent, 
    AlertDialogDescription, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    Button, 
    Logo,
} from '@/components/ui';
import Image from "next/image";
import afilogo from "../../../public/afilogo.png"

import { useExperimentalConfirmed } from '@/app/(app)/_hooks';

const ExperimentalAlertDialog: React.FC = () => {

    const { confirmed, confirm } = useExperimentalConfirmed();

    return (
        <AlertDialog open={!confirmed}>
            <AlertDialogHeader className="hidden">
                <AlertDialogTitle>Confirm Experimental Features</AlertDialogTitle>
                <AlertDialogDescription>Please confirm to continue</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogContent className='flex flex-col items-center justify-center text-center z-[100]'>
            <Image src={afilogo} alt='afilogo' className='w-16 h-16'/>
                <h1 className='text-2xl font-bold'>Welcome to AgentFi</h1>
                <p className='text-sm text-gray-500'>Your account has been created. Get ready to dive into the decentralized future</p>
               
                <Button
                    className='!bg-[#770EFF] w-full'
                    onClick={() => {
                        confirm();
                    }}
                >
                    Continue
                </Button>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ExperimentalAlertDialog;