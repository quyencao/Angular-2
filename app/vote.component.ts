import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'vote',
    template:  `
        <div class="col-md-offset-3">
            <i class="glyphicon glyphicon-menu-up vote-button" (click)="onUpMenuClick()" [class.highlight]="myVote == 1"></i>
            <span>{{totalVotes}}</span>
            <i class="glyphicon glyphicon-menu-down vote-button" (click)="onDownMenuClick()" [class.highlight]="myVote == -1"></i>
        </div>
    `,
    styles: [`
        div {
            width: 20px;
            font-size: 30px;
            text-align:center;
            color:#999;
        }

        .vote-button {
            cursor: pointer;
        }

        .highlight {
            color: orange;
        }
    `]
})
export class VoteComponent {
    @Input('total-votes') totalVotes = 10;

    // 1 is vote up, 0 is no vote, -1 is vote down
    @Input('vote') myVote = 0;

    @Output('vote-change') change = new EventEmitter();

    onUpMenuClick() {

        if(this.myVote == 1) {
            return;
        }
  
        this.totalVotes++;
        this.myVote++;

        this.emitChange();
       
    }

    onDownMenuClick() {

        if(this.myVote == -1) {
            return;
        }

        this.totalVotes--;
        this.myVote--;

        this.emitChange();
  
    }

    emitChange() {
        this.change.emit({
            totalVotes: this.totalVotes,
            vote: this.myVote
        });
    }
}