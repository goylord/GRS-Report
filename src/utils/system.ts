export const modules = import.meta.glob('../views/designer/*.vue')
console.log(modules)

export const viewRegister = (url: string) => {
    console.log(replaceAlias(url))
    return modules[replaceAlias(url)]
}

export const replaceAlias = (aliasUrl: string): string => {
    return `../views/${aliasUrl}.vue`
}