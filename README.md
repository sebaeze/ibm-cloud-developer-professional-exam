# Cheatsheet exam C1000-128  - IBM Cloud Developer professional

The purpose of this repo is to help in the preparation for the exam C1000-128 "IBM Cloud Developer Professional"

## IBM Cloud CLI 

```bash
curl -fsSL https://clis.cloud.ibm.com/install/linux | sh
ibmcloud plugin install cloud-functions

ibmcloud plugin list
```

[https://cloud.ibm.com/docs/cli?topic=cli-getting-started](https://cloud.ibm.com/docs/cli?topic=cli-getting-started)


## Section 1: IBM Cloud Compute Options ( 18% )

### Distinguish between the various IBM Cloud Platform compute options

#### IBM Cloud virtual protect

All the services are deployed on top of LinuxONE to enforce highest protection.
On board HSM.

Four major assets:  Crypto services, DBaaS (MongoDB, Postgrest), Virtual servers and containers

#### IBM Cloud VMware solutions

Security leadership: higest level of encryption / FIPS 140-2 Level 4 
Role Base access control
Compliance and regulatory control
Enterprise grade
Rapid provisioning

#### Virtual private cloud - VPC
Provides logically isolated boundaries for compute services within the public IBM Cloud.

### Identify the concept of Function-as-a-Service (FaaS)

Compute services that runs in response to events.
It's based on Apache OpenWhisk.

#### Usage

```bash
ibmcloud target -g
NS_FN=$(ibmcloud fn namespace list | tail -n 1 | cut -c1-20) && echo $NS_FN && ibmcloud fn namespace target ${NS_FN}

ibmcloud fn deploy -m manifest.yaml
```

## Identify the benefits of using containers

A container is an executable unit of software in which application code is packaged, along with its libraries and dependencies, in common ways so that it can be run anywhere, whether on a desktop, on-premises, or in the cloud.

*   Lightweight
*   Portable
*   Architecture
*   Utilization

### Docker
Docker is a software platform for building and running applications as containers.

Dockerfile -> build -> push -> pull -> run

```bash
sh -v ./03_containers/dockerBuild.sh
```

### Container Registries
A container registry stores Docker images in order to be distributed and shared.

#### Install container registry plug-in + add namespace
```bash
ibmcloud plugin install container-registry
ibmcloud plugin list

ibmcloud cr namespace-add exam-dev 
ibmcloud cr namespaces | less
```

#### Push image to registry
```bash
ibmcloud cr login
docker build -t my.registry/exam-dev/helloworld:1 -f Dockerfile
docker push my.registry/exam-dev/helloworld:1
```

## Recall the core concepts of Kubernetes

Kubernetes is an open source software for managing and orchestation of containers.

*   Proviosioning and deployment of containers.
*   Ensure availability of containers.
*   Scales.
*   Scheduling of containers.
*   Health Checks.

#### Some Kubernetes Objects are:
*   Nodes
*   Pods
*   Deployments
*   ReplicaSets
*   Autoscaling
*   Limits and ResourceQuotas
*   ConfigMaps and Secrets
*   Persistent Volumen

## Identify the components used to deploy an application on IBM Cloud Kubernetes Service

### Install IBM Cloud CLI plugin
```bash
ibmcloud plugin install container-service
ibmcloud ks --help | less
## List Clusters
ibmcloud ks cluster ls
## Create cluster
ibmcloud ks cluster create --help | less
```

### Helm
It helps to manage kubernetes applications.
Bootstrap and deploy containerized applications to Kubernetes.

### DevOps Toolchain

### Istio
It is a microservice framework that allows users to secure, control and observe microservices.
An example are customers adopting Istio to secure communication between their microservices without having to build that logic directly into their application.
Istio can be adopted incrementally.

### Kubernetes network service types
*   ClusterIP
*   NodePort
*   LoadBalancer
*   Ingress

### VPC Load Balancer
The VPC load balancer serves as the external entry point for incoming requests for the app.
The load balancer is multizonal and routes requests for your app through the private NodePorts that are automatically opened on your worker nodes.

### Storage for Kubernets
*   Persistent Volumes
*   Persistent Volume Claims

### IBM Cloud File Storage
IBM Cloud(r) File Storage is persistent, fast, and flexible network-attached, NFS-based File Storage. 
File Storage volumes can be provisioned from 20 GB to 12 TB with two options:
*   Provisioning with Endurance Tiers
*   Provisioning with Performance

### IBM Cloud Block Storage
IBM Cloud(r) Block Storage is persistent, high-performance iSCSI storage that is provisioned and managed independently of compute instance

### IBM Cloud Object Storage
IBM(r) Cloud Object Storage (COS) stores encrypted and dispersed data across multiple geographic locations.


### Indicate the functionality involved in deploying an application on Red Hat OpenShift on IBM Cloud
Red Hat OpenShift is an open source container application platform based on the Kubernetes container orchestrator. 

### Code Engine
IBM Cloud® Code Engine is a fully managed, serverless platform that runs your containerized workloads, including web apps, micro-services, event-driven functions, or batch jobs.
Create messages/events from event producers.
Run-to-completition batch jobs.
Multizone regions supported.

## Section 2: Modern Integration ( 20% )

### Identify the key components of a Cloud Native architecture