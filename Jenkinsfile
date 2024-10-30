pipeline {
    agent any
    environment {
        NODE_ENV = 'development'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                script {
                    sh 'npm test'
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                script {
                    sh 'npm run build'
                }
            }
        }
    }
    post {
        success {
            echo 'Build and tests succeeded!'
        }
        failure {
            echo 'Build or tests failed.'
        }
    }
}
