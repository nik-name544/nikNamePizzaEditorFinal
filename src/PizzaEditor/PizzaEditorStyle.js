import styled from 'styled-components';
import React from 'react'

export const MainApp = styled.form`
    display: flex;
    margin: 0 auto;
    // margin-top: 100px;
    align-items: center;
    height: 100%;
    width: 360px;
    flex-direction: column;
`

export const SizeDoughInner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const SizeDough = styled.fieldset`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 47%;
`
export const ToppingTitle = styled.legend`
    color: #4B4B7C;
    font-family: Rounded Mplus 1c;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding-left: 15px;
`

export const SizeDoughWrapper = styled.div`
    width: fit-content;
    background: #F9F9FB;
    padding: 6px 6px 12px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    width: auto;
`

export const RadioBox = styled.input`
    display: none;
`

export const RadioLabel = styled.label`
    input[type="radio"]:checked  {
    background: #FFFFFF;
    box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
    }
`

export const RadioText = styled.span`
    vertical-align: -6.5px;
    border-radius: 12px;
    outline: none;
    transition: 0.2s;
    padding: 4px 17px; 
    font-family: Rounded Mplus 1c;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #1F1F33;
`

export const SizeDoughText = styled(RadioText)`
    padding: 4px 20px;  
`

export const SauceInner = styled.div`
    width: 100%;
    background: #F9F9FB;
    padding: 6px 6px 12px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
`

export const CheckboxGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`

export const CheckboxInner = styled.label`
    background: #FFFFFF;
    box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
    border-radius: 12px;
`

 

export const CheckboxTitle = styled.div` 
    font-family: Rounded Mplus 1c;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1F1F33;
    border-radius: 12px;
    position: relative; 
    display: flex;
    flex-direction: column;
    padding: 0 0 9px 16px;
`

export const CheckboxWrapper = styled.div`
    display: flex;
    padding-left: 15px;
`

export const CheckboxText = styled.p`
    color: #1F1F33;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-right: 30px;
    font-family: Rounded Mplus 1c;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`