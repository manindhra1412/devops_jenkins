pipeline {
    agent any
    environment {
        NODE_VERSION = '14' // or '16' or any compatible version
    }
    stages {
        stage('Install Node.js') {
            steps {
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash'
                sh '. ~/.nvm/nvm.sh && nvm install $NODE_VERSION && nvm use $NODE_VERSION'
                sh '. ~/.nvm/nvm.sh && node -v && npm -v'
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh '. ~/.nvm/nvm.sh && npm install'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh '. ~/.nvm/nvm.sh && npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh '. ~/.nvm/nvm.sh && npm run build'
            }
        }
    }
}
