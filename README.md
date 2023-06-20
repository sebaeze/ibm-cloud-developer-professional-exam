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

#### Key components:
*   Cloud-Native Microservices
*   Microservices Architecture

.   Microservice: Independently deployable, language independent, less risk in changes, iterative at will
.   12 Factor methodology: Clarify the boundaries between application and infrastructure. 
    It includes: codebase, dependencies, config, backing services, build+release+run, processes, port binding, concurrency, disposability, dev/prod parity, logs, admins processes.
.   MicroProfiles and Kubernetes can be used to implement the 12-factor methodologies.

#### List the modern integration patterns available in the Cloud Architecture Center
*   Application Modernization: Moving from legacy architecture to Cloud env.
*   IBM Cloud Transformation Advisor: Helps to analyze and modernize current architecture.
*   

### Differentiate between the different integration services in IBM Cloud
*   API Connect
*   API Gateway
*   IBM Event streams: Built with Apache Kafka -> Consumer, producer and API admin, Streams API, Connect API
*   IBM APP Connect: Creates workflows => connects APIs, APPs and Software. There are 2 flows:
                    -> Event-driven
                    -> For API
*   IBM MQ: Litle queue manager; Billable queue Manager.
            The Queue Manager can be deployed on IBM Cloud and AWS.
*   RabbitMQ: Message broker. It Helps to decouple applications and to balance the workload into the backend.

### Choose the services that comprise the API lifecycle

*   npm package Loopback+apiconnect: Easy integration with IBM Cloud services and API Connect

Data Source             Connector Package
---------------------   -----------------------------
Cloudant                loopback-connector-cloudant
DashDB                  loopback-connector-dashdb
Db2                     loopback-connector-db2
Db2 for zOS             loopback-connector-db2z
Microsoft SQL Server    loopback-connector-mssql
MongoDB                 loopback-connector-mongodb
MySQL                   loopback-connector-mysql
Oracle                  loopback-connector-oracle
PostgreSQL              loopback-connector-postgresql
SOAP web services       loopback-connector-soap
REST web services       loopback-connector-rest

## Section 3: Security and Identity ( 15% )

### Identify the key security aspects of cloud native applications

Key componentes of security:
*   Identities and user access to cloud resources
*   Protect infrastructure, application and data
*   Security monitoring across environments

#### Data Security

Data protection at rest and in transit / motion
*   Block and file storage: IBM Multi-Cloud Data Encryption (MDE)
*   IBM Key Protect provides key management service ( KMS )
*   Hyper Protect Crypto Services provides support for automated certificate management

#### Data integrity
Services for maintaining and assuring data acurracy and consistency.
*   Hashing Data allows to detect unauthorized data modifications
*   DB2 has entity and referencial integrity
*   Object storage supports RC4-128 encryption with MD5-128 and AES-128 encryption with MD5-128

#### Secure DevOps
Integrations of security aspect to the DevOps practice

### Distinguish the core components of IBM Cloud Identity and Access Management
*   Authentication using IBMid
*   Single Sign-On
*   Multifactor authentication
*   LDAP directory
*   Audit and compliance

#### Cloud identity and access management ( IAM )
*   Roles: viewer, operator, editor, administrator
*   Service access role: Reader, Writer, Manager

### Indicate the role of IBM key protect services in Secure Key Management
*   BYOK -> Bring your own key model
*   HSM -> Hardware security module
*   

### Differentiate the tools that support Application Security

### Distinguish LogDNA and Security Advisor as they relate to management of Security Visibility

## Section 5: DevOps and Continuous Delivery ( 12% )

### Indicate the use of IBM Cloud Object Storage
    *   Object storage - COS
        - Regional: Data is located in several datacenters in the same region
        - Cross-Region: Data is replicate across regions.
        - Standard: standard access
        - Vault: Cool access, once per month + additional cost per GB of data transfer
        - Cold Vault: Once x 90 days + additional cost per GB of data transfer

### Differentiate the IBM Cloud Databases used to develop applications
    - Cloudant: NoSQL database
    - Elasticsearch: RESTful search data
    - etcd: key-value database -> usefull in configuration data, metadata for kubernetes
    - 

### Contrast IBM DB2 Warehouse and DB2


## Section 5: DevOps and Continuous Delivery ( 12% )

### Recall the concept of DevOps
    *   Continuous integration
    *   Continuous delivery
    *   Continuous deployment

### Services
    - Cloud Foundry
    - Tekon-based Delivery pipeline
    - Openshift: Extends Kubernetes functionality by adding extra features
    - Urban Code
### Methodology
    - DevOps
    - IBM Garage Methodology

### Indicate the capabilities of IBM Cloud Continuous Delivery Toolchain


### IBM Garage Methodology
    - Advise
    - Build
    - Move
    - Manage

## Section 7: Managing and Running a Cloud Application ( 10% )

### Identify the concepts of an auto-scaling policy in IBM Cloud

#### Concepts
    Scale Up: Vertical scaling -> Adds resources ( CPU, memory, storage, network )    
    Scale Out: Horizontal scaling -> adds more replicas ( virtual machines, nodes, containers )
    Autoscaling -> seamless and automatic management of resources.
    *   Scale Up:   adds compute capacity when workload increases.
    *   Scale Down: remove unnecesary resources when demand goes down.
    Rules:
    *   Schedule: scale up/down based on schedule.
    *   Deman: scale based on compute demand.
    Cluster nodes autoscaler:
    *   Plugin for kubernetes cluster public service and VPC.
    *   Scales cluster nodes.
    *   Only works for cluster with public network connectivity.
    Horizontal Pods autoscaler:
    *   Scales pods based on demand and custom metrics.
    Autoscaler for VPC:
    *   Scales virtual machines
    *   Dynamically creates and deletes VMs.
    *   Scales memory and cpu on demand.
    *   Instance template: defines the details for the VM
    *   Instance group requires the template for managing a group of VMs, having the same characteristics.

#### Scale in kubernetes

Scales to fixed numbers of pods, for example: 2
```bash
kubectl scale deployment/my_deployment --replicas=2
```

Autoscale based on CPU. Min pods=2, Max pods=6
```bash
kubectl autoscale deployment/my_deployment --min=2 --max=2 --cpu-percent=75
```

#### Auto-scaler policies
    *   Instance limits defines the min and max values for instances.
    *   Schedules represented in JSON format. The following properties are required:
        - instance_min_count
        - instance_max_count
        - initial_min_instance_count
        - start_time
        - end_time

### Distinguish between IBM Cloud application and logging tools

#### Monitoring
    *   IBM Cloud monitoring: monitors health of infrastructure and services; telemetry; custom alerts and dashboards.
    *   A sysdig agent is required in order to collect data and forward outside the kubernetes cluster   

#### Observability
    *   Log Analysis: Centralize logging output from services and infrastructure
    *   IBM Cloud activity tracker: Records API activities into storage services, such as: Object storage.
    *   IBM Cloud platform logs
    *   IBM Cloud activiy tracker