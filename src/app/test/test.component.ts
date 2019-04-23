import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'app-test',
	template: `
		<p>1. interpolation</p>
		{{ add() }} {{ name }} adawd

		<p>2. Input and propertys</p>
		<input [id]="myId" type="text" value="mishan" >
		<input [disabled]="isDisabled" type="text" value="mishan" >

		<p>3. style binding</p>
		<p>4. class binding</p>
		<h2 [style.color]="hasError ? 'red' : 'green'"> hi, there </h2>
		<h2 [ngStyle]="Style"> hi, there </h2>

		<p>10. use of array </p>
		<table id="table">
			<thead>
				<th>sr</th>
				<th>first name<th>
				<th>last name<th>
				<th>email<th>
			</thead>
			<tbody>
				<tr *ngFor="let item of array_data">
					<td>{{item.sr}}</td>
					<td>{{item.f_name}}</td>
					<td>{{item.l_name}}</td>
					<td>{{item.email}}</td>
				</tr>
			</tbody>
		</table>

		<p>5. onclick event binding</p>
		<button (click)="onClick()">Click 1</button>
		<button (click)="greet='button 2 clicked'">Click 2</button>
		<h5>{{ greet }}</h5>

		<p>6. template reference variable</p>
		<input #myInput type="text">
		<button (click)="logMessage(myInput.value)">Log</button>

		<p>7. Two way binding</p>
		<input [(ngModel)]="namea" type="text">
		{{ namea }}

		<p>8. structural directives</p>
		<p>9. ngIF Directive</p>
		<div *ngIf="displayName=='true'; then thenBlock else elseBlock"></div>
		<ng-template #thenBlock>
			<h4>
				this is thenBlock
			</h4>
		</ng-template>
		<ng-template #elseBlock>
			<h4>
				this is elseBlock
			</h4>
		</ng-template>
		<h4 *ngIf="false">it remove hole element from the body if 'ngIf' is true </h4>

		<p>9. ngSwich Directive</p>
		<div [ngSwitch]="color">
			<div *ngSwitchCase="'red'" [style.color]="color">this is red color</div>
			<div *ngSwitchCase="'green'" [style.color]="color">this is green color</div>
			<div *ngSwitchCase="'blue'" [style.color]="color">this is blue color</div>
		</div>

		<p>10. Component integration</p>
		<h4>{{"Hello " + parentData}}</h4>
		<h4>{{"Hello " + pData}}</h4>
		<button (click)="fireEvent()">Click 1</button>



	`,
	styles: [`
		#table {
			border: 1px solid black;
		}
		#table thead {
			color: red;
			background: silver;
		}
		#table tbody {
			color: orange;
			border: 1px doted black;
		}
	`
	]

})
export class TestComponent implements OnInit {
	public name = "mishan";
	public x = 10;
	public y = 20;
	public result = this.x * this.y;
	public isDisabled = "false";
	public hasError = 'true';
	public greet = '';
	public namea = '';
	public displayName = 'false';
	public Style = {
		color: "blue",
		fontStyle: "italic"
	}
	public color = 'red';
	public array_data = [
		{
			sr: '1',
			f_name: 'mishan',
			l_name: 'goti',
			email: 'mishan@gmail.com'
		},
		{
			sr: '2',
			f_name: 'keval',
			l_name: 'bhogayata',
			email: 'keval@gmail.com'
		},
		{
			sr: '3',
			f_name: 'kishan',
			l_name: 'godwda',
			email: 'kishan@gmail.com'
		},
		{
			sr: '4',
			f_name: 'mdawd',
			l_name: 'goawd',
			email: 'misdawn@gmail.com'
		},
		{
			sr: '5',
			f_name: 'dwdsa mishan',
			l_name: 'gotidwd',
			email: 'mishaadwd@gmail.com'
		},
		
	]
	@Input() public parentData;
	@Input('parentData') public pData;
	
	constructor() {

	}
	@Output() public childEvent = new EventEmitter();
	fireEvent() {
		this.childEvent.emit('hey mishan ');
	}
	onClick() {
		console.log('you click button');
		this.greet;
	}
	add() {
		return "hello " + this.name + "  " + this.result;
	}
	logMessage(value) {
		console.log(value);
	}

	ngOnInit() {

	}
}
