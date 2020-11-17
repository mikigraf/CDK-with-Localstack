import * as cdk from '@aws-cdk/core';
import {Code, Runtime, Function} from "@aws-cdk/aws-lambda";
import {LambdaIntegration, RestApi} from "@aws-cdk/aws-apigateway";
import {CfnOutput} from "@aws-cdk/core";

export class CodeStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new Function(this, 'helloWorldLambda', {
      runtime: Runtime.NODEJS_12_X,
      code: Code.fromAsset('lib/helloWorldLambda'),
      handler: 'index.handler'
    });

    const api = new RestApi(this,'api',{})
    const lambdaIntegration = new LambdaIntegration(lambda)
    const lambdaResource = api.root.addResource('hello')
    lambdaResource.addMethod("GET", lambdaIntegration)
    new CfnOutput(this, "Endpoint", { value: `http://localhost:4566/restapis/${api.restApiId}/prod/_user_request_${lambdaResource.path}` })
  }
}
