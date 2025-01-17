import 'jest';
import { CommitBox } from '../../src/components/CommitBox';
import { classes } from 'typestyle';
import {
  stagedCommitButtonStyle,
  stagedCommitButtonReadyStyle,
  stagedCommitButtonDisabledStyle
} from '../../src/style/BranchHeaderStyle';

describe('CommitBox', () => {
  describe('#checkReadyForSubmit()', () => {
    it('should update commit box state to be ready when changes are staged', () => {
      const box = new CommitBox({
        commitAllStagedFiles: async () => {},
        hasStagedFiles: true
      });

      let actual = box.checkReadyForSubmit(true);

      let expected = classes(
        stagedCommitButtonStyle,
        stagedCommitButtonReadyStyle
      );
      expect(actual).toEqual(expected);
    });

    it('should update commit box state to be disabled when no changes are staged', () => {
      const box = new CommitBox({
        commitAllStagedFiles: async () => {},
        hasStagedFiles: true
      });

      let actual = box.checkReadyForSubmit(false);
      let expected = classes(
        stagedCommitButtonStyle,
        stagedCommitButtonDisabledStyle
      );
      expect(actual).toEqual(expected);
    });

    it('should be ready to commit with a message set.', () => {
      const box = new CommitBox({
        commitAllStagedFiles: async () => {},
        hasStagedFiles: true
      });
      box.setState(
        {
          value: 'message'
        },
        () => {
          let actual = box.checkReadyForSubmit(true);

          let expected = stagedCommitButtonStyle;
          expect(actual).toEqual(expected);
        }
      );
    });
  });
});
