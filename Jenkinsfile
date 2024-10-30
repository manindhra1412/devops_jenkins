pipeline {
    agent any
    environment {
        NODE_VERSION = '14' // Set to the desired Node.js version
    }
    stages {
        stage('Install NVM and Node.js') {
            steps {
                echo 'Installing NVM and setting up Node.js...'
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash'
                sh '. ~/.nvm/nvm.sh && nvm install $NODE_VERSION'
                sh '. ~/.nvm/nvm.sh && nvm use $NODE_VERSION'
                sh '. ~/.nvm/nvm.sh && node -v && npm -v' // Verify Node and npm versions
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                sh '. ~/.nvm/nvm.sh && nvm use $NODE_VERSION && npm install'
                sh '. ~/.nvm/nvm.sh && nvm use $NODE_VERSION && npm install jest --save-dev' // Install Jest
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh '. ~/.nvm/nvm.sh && nvm use $NODE_VERSION && npm test' // Runs Jest tests
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh '. ~/.nvm/nvm.sh && nvm use $NODE_VERSION && npm run build' // Run build command
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution complete.'
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline execution failed.'
        }
    }
}
