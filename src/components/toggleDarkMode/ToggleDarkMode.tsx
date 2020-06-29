import React from 'react'
import './toggleDarkMode.css'

interface ToggleDarkModeProps {}
interface ToggleDarkModeState {}

export default class ToggleDarkMode extends React.Component<ToggleDarkModeProps, ToggleDarkModeState> {
    componentDidMount() {
        if(!window.localStorage.getItem('theme')) window.localStorage.setItem('theme', 'light')
    }

    handleToggleDarkMode(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault()
    }

    render() {
        return <div 
            className="toggleDarkMode-container"
            onClick={ e => this.handleToggleDarkMode(e) }
        >
            ToggleDarkMode CTA
        </div>
    }
}