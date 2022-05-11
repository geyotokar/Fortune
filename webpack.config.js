module: {
    rules: [
        {
            test: /\.mp3$/,
//            loader: 'file-loader',
//            query: {
//                name: 'static/media/[name].[hash:8].[ext]'
            type: "asset/resource"
        }
    ]
}