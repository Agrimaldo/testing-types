const path = require('path');
const dotenv = require('dotenv-webpack');

module.exports = (env) => {
    return {
        plugins:[
            new dotenv({
              path: `./.env.${env}`
            }),
          ],    
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "mfe-medical-record-app.bundle.js",
        },
        resolve: {
          extensions: ['.tsx', '.ts','.jsx', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: { loader: "babel-loader" },
                },
                {
                    test: /\.css$/,
                    use: [ "style-loader", "css-loader" ],
                },
                {
                    test: /\.(?:ico|gif|png|jpeg|jpg|svg)$/i,
                    type:'asset/resource',
                },            
            ]
        },
        mode: 'production',        
    }
}