import { makeAutoObservable } from "mobx"

class AppState {
    colors: Array<Color> = []
    isModalShown: boolean = false
    activeColor: Color | null = null

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

}

export const appState = new AppState()
