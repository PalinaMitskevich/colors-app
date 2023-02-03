import { makeAutoObservable } from "mobx"

class AppState {
    colors: Array<Color> = []
    isModalShown: boolean = false
    activeColor: Color | null = null
    searchInputValue: string = ''

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

}

export const appState = new AppState()
