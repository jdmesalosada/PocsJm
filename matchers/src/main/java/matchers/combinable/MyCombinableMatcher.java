package matchers.combinable;

import org.hamcrest.BaseMatcher;
import org.hamcrest.Description;
import org.hamcrest.Matcher;

import java.util.ArrayList;
import java.util.List;

public class MyCombinableMatcher<T> extends BaseMatcher<T>{

    private final List<Matcher<? super T>> matchers = new ArrayList<>();
    private final List<Matcher<? super T>> failed = new ArrayList<>();

    private MyCombinableMatcher(final Matcher matcher) {
        matchers.add(matcher);
    }

    public MyCombinableMatcher and(final Matcher matcher) {
        matchers.add(matcher);
        return this;
    }

    @Override
    public boolean matches(final Object item) {
        for (final Matcher<? super T> matcher : matchers) {
            if (!matcher.matches(item)) {
                failed.add(matcher);
                return false;
            }
        }
        return true;
    }

    @Override
    public void describeTo(final Description description) {
        description.appendList("(", " " + "and" + " ", ")", matchers);
    }

    @Override
    public void describeMismatch(final Object item, final Description
            description) {
        for (final Matcher<? super T> matcher : failed) {
            description.appendDescriptionOf(matcher).appendText(" but ");
            matcher.describeMismatch(item, description);
        }
    }

    public static <LHS> MyCombinableMatcher<LHS> all(final Matcher<? super LHS> matcher) {
        return new MyCombinableMatcher<LHS>(matcher);
    }

}
