import { makeAutoObservable } from "mobx"

class AppState {
    colors: Array<Color> = []
    isModalShown = false
    activeColor: Color | null = null
    searchInputValue = ''
    errorCode: number | null = null

    constructor() {
        makeAutoObservable(this)
    }

    setColors(data: Array<Color>) {
        this.colors = data
    }

    setIsModalShown(value: boolean) {
        this.isModalShown = value
    }

    setActiveColor(item: Color) {
        this.activeColor = item
    }

    setSearchInputValue(value: string) {
        this.searchInputValue = value
    }

    setErrorCode(error: number | null) {
        this.errorCode = error
    }
}

export const appState = new AppState()
