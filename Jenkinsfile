pipeline {
  agent {
    node {
      label 'wordic-front-aruba-pl-80.211.243.116'
    }

  }
  stages {
    stage('environment') {
      steps {
        sh 'hostname'
        sh 'id'
        sh 'whoami'
        sh 'ip addr show ens160'
        sh 'cat /etc/os-release'
        sh 'uname -a'
        sh 'env'
        sh 'pwd'
        sh 'sudo docker -v'
      }
    }

  }
}