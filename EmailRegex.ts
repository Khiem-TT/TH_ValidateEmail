export class EmailRegex {
    emailRegex: RegExp = /^[a-z0-9]+@+[a-z]+\.+[a-z]{3}$/;

    validate(regex: string): boolean {
        return this.emailRegex.test(regex);
    }
}