
export class UniversityError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "UniversityError"
    }
}