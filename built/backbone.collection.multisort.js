//     BackboneCollectionMultisort
//     (c) simonfan
//     BackboneCollectionMultisort is licensed under the MIT terms.

define("backbone.collection.multisort",["backbone","comparator"],function(t,r){function i(t,r){return JSON.stringify({attributes:t,directions:r})}var o=t.Collection.extend({_multisortId:!1,isSorted:function(t,r){return this._multisortId===i(t,r)},multisort:function(t,o,n){var s=i(t,o);return this._multisortId!==s&&(this.comparator=r(t,o,{root:"attributes"}),this.sort(n),this._multisortId=s),this}});return o});