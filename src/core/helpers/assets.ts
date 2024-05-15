const publicPath = process.env.BASE_URL || '/';

export const getAssetPath = (path: string): string => {
    return publicPath + path;
};
