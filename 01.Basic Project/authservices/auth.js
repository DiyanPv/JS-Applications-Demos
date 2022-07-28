export const isAuthenticated = () => {
    let accessToken = sessionStorage.getItem(`authToken`);
    return Boolean(accessToken)
}

export const authMiddleWare = (ctx, next) => {
    ctx.isAuth = isAuthenticated();
    console.log(ctx.isAuth)
    next()
}